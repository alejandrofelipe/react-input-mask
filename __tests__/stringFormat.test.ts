import {textMask} from "../src/lib/text-mask";

test('textMask must return a masked string', () => {
	expect(textMask('(99) 9999-9999', '123456789'))
		.toBe('(12) 34567-89');
})
