import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FetchData } from '../../pages/api';
import { authLogin } from '../../redux';
import { getImageUrl, UploadImage } from '../../utils';
import { Button } from '../index';

const SingUp = ({ onSingUp }: { onSingUp: any }) => {
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

	return (
		<>
			<h1 className="text-xl text-semibold mb-2">Create account</h1>
			<form className="mb-2" onSubmit={handleSignUp}>
				<input
					className="w-full rounded mb-4 text-body-color text-base outline-none focus-visible:shadow-none  focus:border-primary text-black-dark"
					type="file"
					name="file"
					placeholder="Full Name"
					ref={imageRef}
				/>
				<input
					className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary text-black-dark"
					type="text"
					name="name"
					placeholder="Full Name"
					required
					ref={nameRef}
				/>
				<input
					className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary text-black-dark"
					type="text"
					name="email"
					placeholder="email"
					required
					ref={emailRef}
				/>
				<input
					className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary text-black-dark"
					type="password"
					name="password"
					placeholder="password"
					required
					ref={passwordRef}
				/>
				<Button>Sing Up</Button>
			</form>
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
