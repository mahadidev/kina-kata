import jwtDecode from 'jwt-decode';

export const createOrGetUser = async (response: any, onLogin: any) => {
	const decoded: { name: string; email: string; picture: string; sub: string } =
		jwtDecode(response.credential);
	const { name, email, picture, sub } = decoded;

	const user = {
		_id: sub,
		_type: 'user',
		name: name,
		email: email,
		image: picture,
	};

	onLogin(user);
};
