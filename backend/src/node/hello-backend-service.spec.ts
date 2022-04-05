import { HelloBackendService } from "../common/protocol"
import { HelloBackendServiceImpl } from "./hello-backend-service";
import {expect } from 'chai';


describe('HelloBackendService', ()=>{
    it('return Hello + name with a non empty String', async () => {
        const helloBackendService:HelloBackendService = new HelloBackendServiceImpl();
        const testString = "Jonas";
        const result = await helloBackendService.sayHelloTo(testString);
        expect(result).equal('Hello Jonas');
    });

    it('should return just Hello with an empty String',async () => {
        const helloBackendService:HelloBackendService = new HelloBackendServiceImpl();
        const testString = "";
        const result = await helloBackendService.sayHelloTo(testString);
        expect(result).equal('Hello');
    });
})