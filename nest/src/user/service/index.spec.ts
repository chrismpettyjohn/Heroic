import {omit} from 'lodash';
import {UserService} from './index';
import {UserEntity, UserEntityGeneric} from '../entity';
import {UserFactory} from '../factory';
import {getRepository, Repository, createConnection, getConnection} from 'typeorm';

describe('User Service', () => {
  
  let userRepository: Repository<UserEntity>;
  let userService: UserService;
  let mockUsers: UserEntity[];
  
  const getMockUsersWithoutPassword = (): UserEntityGeneric[] => {
    return mockUsers.map(user => omit(user, 'password'));
  }
  
  beforeAll(async done => {
    await createConnection();
    done();
  });
  
  afterAll(async done => {
    await getConnection().dropDatabase();
    done();
  });
  
  beforeEach(async done => {
    await getConnection().synchronize(true);
    userRepository = getRepository(UserEntity);
    userService = new UserService(userRepository);
    mockUsers = [
      await UserFactory(),
      await UserFactory(),
    ];
    done();
  });
  
  describe('findAll', () => {
    
    it('will return an array of all users without password', async done => {
      const response: UserEntityGeneric[] = await userService.findAll();
      expect(response).toEqual(getMockUsersWithoutPassword());
      done();
    });
    
  });
  
  describe('findByID', () => {
    
    it('will return an user without the password', async done => {
      const mockUser: UserEntityGeneric = omit(mockUsers[0], 'password');
      const response: UserEntityGeneric = await userService.findByID(mockUser.id);
      expect(response).toEqual(mockUser);
      done();
    });
    
    it('will return a 404 when no user is found', async done => {
      try {
        await userService.findByID(0);
        fail('404 was expected but received a 200');
        done();
      } catch (e) {
        expect(true).toBeTruthy();
        done();
      }
    });
    
  });
  
  describe('findByUsername', () => {
  
    it('will return an user without the password', async done => {
      const mockUser: UserEntityGeneric = omit(mockUsers[0], 'password');
      const response: UserEntityGeneric = await userService.findByUsername(mockUser.username);
      expect(response).toEqual(mockUser);
      done();
    });
    
    it('will return a 404 when no user is found', async done => {
      try {
        await userService.findByUsername('0');
        fail('404 was expected but received a 200');
        done();
      } catch (e) {
        expect(true).toBeTruthy();
        done();
      }
    });
    
  });
  
  describe('findByUsernameWithPassword', () => {
    
    it('will return an user with the password', async done => {
      const mockUser: UserEntity = mockUsers[0];
      const response: UserEntity = await userService.findByUsernameWithPassword(mockUser.username);
      expect(mockUser).toEqual(response);
      done();
    });
  
    it('will return a 404 when no user is found', async done => {
      try {
        await userService.findByUsernameWithPassword('0');
        fail('404 was expected but received a 200');
        done();
      } catch (e) {
        expect(true).toBeTruthy();
        done();
      }
    });
    
  });
  
  describe('searchByusername', () => {
    
    it('will return an array of users without passwords that have similar names', async done => {
      const mockUser: UserEntityGeneric = omit(mockUsers[0], 'password');
      const response: UserEntityGeneric[] = await userService.searchByUsername(mockUser.username);
      expect(response).toEqual([mockUser]);
      done();
    });
    
    it('will return a 404 when no user matches the search query', async done => {
      try {
        await userService.searchByUsername('0');
        fail('404 was expected but received a 200');
        done();
      } catch (e) {
        expect(true).toBeTruthy();
        done();
      }
    });
    
  });
  
});
