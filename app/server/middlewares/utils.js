
const notFound = (req, res) => {
    res.status(404);
    res.send('404');
};

const error = (err, req, res, next) => {
    res.status(500);
    res.send('ups something wen wrong');
};

export {
    notFound,
    error
}