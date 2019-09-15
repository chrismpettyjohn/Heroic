import * as Hash from 'js-sha256';
import * as Bcrypt from 'bcryptjs';
import {CoreService} from './service';

describe('Core Service', () => {
  
  let coreService: CoreService;
  
  beforeEach(() => {
    coreService = new CoreService();
  });

  describe('checkPassword', () => {
    
    it('will return true if the passwords match', () => {
      const PASSWORD_PLAIN: string = 'password';
      const PASSWORD_HASHED: string = Bcrypt.hashSync(PASSWORD_PLAIN);
      const matching: boolean = coreService.checkPassword(PASSWORD_PLAIN, PASSWORD_HASHED);
      expect(matching).toBeTruthy();
    });
    
    it('will return false if the passwords do not match', () => {
      const PASSWORD_PLAIN: string = 'password';
      const PASSWORD_HASHED: string = Bcrypt.hashSync(PASSWORD_PLAIN);
      const matching: boolean = coreService.checkPassword('not_the_password', PASSWORD_HASHED);
      expect(matching).toBeFalsy();
    });
    
  });
  
  describe('hashString', () => {
    
    it('will return a sha256 hash of the string', () => {
      const PLAIN_TEXT: string = 'test';
      const HASHED_TEXT: string = Hash.sha256(PLAIN_TEXT);
      const result: string = coreService.hashString(PLAIN_TEXT);
      expect(HASHED_TEXT).toBe(result);
    });
  
  });

});
