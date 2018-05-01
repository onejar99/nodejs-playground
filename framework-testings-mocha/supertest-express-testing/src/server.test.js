const supertest = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Testing Server.js', ()=>{
    describe('API /hello', ()=>{
        it('testing GET /hello - text',(done)=>{
            supertest(app)
                .get('/hello')
                .expect('Content-Type', /text/)
                .expect('hello world!')
                .expect(200)
                .end((err, rsp)=>{
                    if(err) throw err;
                    done();
                });
        });
    });

    describe('API /info', ()=>{
        it('testing GET /info - json',(done)=>{
            supertest(app)
                .get('/info')
                .expect(404)
                .end(done);
        });
        
        it('testing POST /info - json',(done)=>{
            supertest(app)
                .post('/info')
                .expect(200)
                .expect('Content-Type', /json/)
                .expect('Content-Length', '24')
                .expect({name: 'John', age: 18})
                .expect((rsp)=>{
                    expect(rsp.body).toInclude({name: 'John'});
                    expect(rsp.body).toExclude({age: 55});
                })
                .end(done);
        });
    });
});
