const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const faker = require('faker');

chai.use(chaiAsPromised);
chai.use(sinonChai);
const { expect } = chai;

faker.random.string = (length = 5) => faker.internet.password(length, false, /[a-z]/);

module.exports = {
  sinon: require('sinon'),
  faker,
  chai,
  expect,
};
