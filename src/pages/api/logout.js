import cookie from 'cookie';

export default async function (req, res) {
    try {
        await res.setHeader('Set-Cookie', cookie.serialize('token', '', {
            httpOnly: true,
            maxAge: 0,
            path:'/'
        }));

        res.status(200).json({
            status: 200,
            message: 'Logout Success'
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}
