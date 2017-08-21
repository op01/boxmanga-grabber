import test from 'ava'
import grabber from '.'

test('grab one piece', async t => {
	const result = await grabber('http://www.box-manga.com/manga-one-piece/ch-875/')
	console.log(result)
	t.is(result.data.length,17)
})