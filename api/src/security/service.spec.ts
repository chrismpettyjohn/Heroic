import {UserEntity} from '../user/entity';
import {SecurityService} from './service';
import {UserService} from '../user/service';
import {getRepository, Repository, createConnection, getConnection} from 'typeorm';

describe('Security Service', () => {
  
  let userRepository: Repository<UserEntity>;
  let userService: UserService;
  let securityService: SecurityService;
  
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
    securityService = new SecurityService(userService);
    done();
  });
  
  describe('findIPBans', () => {
    
    it('will return an empty array', async done => {
      const result: UserEntity[] = await securityService.findIPBans('0.0.0.0');
      expect(result).toEqual([]);
      done();
    });
    
  });
  
});
