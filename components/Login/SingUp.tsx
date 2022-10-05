import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FetchData } from '../../pages/api';
import { authLogin } from '../../redux';
import { getImageUrl, UploadImage } from '../../utils';
import { Button, Input } from '../index';

const SingUp = ({
	onSingUp,
	setFormTitle,
}: {
	onSingUp: any;
	setFormTitle: any;
}) => {
	// form ref
	const imageRef = useRef(null);
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const dispatch = useDispatch();

	const handleSignUp = (e: any) => {
		e.preventDefault();

		FetchData({
			query: `*[_type == "user" && email == "${emailRef.current.value}"]`,
			callBack: (response: any) => {
				if (response.length == 0) {
					UploadImage({
						image: imageRef.current.files[0],
						onUpload: (image: any) => {
							if (image) {
								FetchData({
									query: {
										_type: 'user',
										name: nameRef.current.value,
										email: emailRef.current.value,
										password: passwordRef.current.value,
										image: image.url,
									},
									sub: 'addUser',
									source: 'custom',
									callBack: (createResponse: any) => {
										const user = {
											_id: createResponse._id,
											name: createResponse.name,
											email: createResponse.email,
											password: createResponse.password,
											image: createResponse.image,
										};
										dispatch(authLogin(user));
									},
								});
							}
						},
					});
				} else {
					console.log('already exists');
				}
			},
		});
	};

	useEffect(() => {
		setFormTitle('Create a new account');
	}, [setFormTitle]);

	return (
		<>
			<div className="w-full mb-2">
				<Input type="file" name="image" label="Upload your profile picture" />
				<Input type="text" name="name" label="Full Name" />
				<Input type="email" name="email" label="Email Address" />
				<Input type="password" name="password" label="Password" />

				<Button className="w-full mt-4" type="button">
					Login
				</Button>
			</div>
			<div className="flex mt-4">
				<p>Already a user? </p>
				<span
					className="text-primary cursor-pointer ml-1"
					onClick={() => {
						onSingUp(true);
					}}
				>
					Login
				</span>
			</div>
		</>
	);
};

export default SingUp;
