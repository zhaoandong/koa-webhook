var router = require('koa-router')();

router.get('/', async function (ctx, next) {
	console.log('312321321313');
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
