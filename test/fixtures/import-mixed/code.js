import fooDefault, {foo, bar as baz} from 'foo';
import barDefault, * as barStar from 'bar';

console.log(fooDefault, foo, baz);
console.log(barDefault, barStar);
