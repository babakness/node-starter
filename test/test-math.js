import test from 'ava';
import { add, subtract, multiply } from "../lib/example"

test('add', t => {
	const result = add(1)(2)
	debugger
	t.deepEqual(3, result)
});

test('multiply', t => {
	const result = multiply(2)(3)
	t.deepEqual(6, result)
})

test('subtract', t => {
	const result = subtract(5)(3)
	t.deepEqual(2, result)
})

test('bar', async t => {
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});
