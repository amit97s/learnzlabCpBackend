export class IndexController {
    getIndex(req, res) {
        res.render('index', { title: 'Home' });
    }
}