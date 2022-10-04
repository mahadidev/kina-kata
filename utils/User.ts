import jwtDecode from 'jwt-decode';

export const getUserInfo = async (response: any, callBack: any) => {
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

	callBack(user);
};
