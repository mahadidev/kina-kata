import React, { useEffect, useRef, useState } from 'react';
import { UploadImage } from '../../utils';
import { Card, Icons } from '../index';

interface InputPropType {
	type: string;
	name: string;
	label: string;
	required?: boolean;
	isFileUploaded?: {
		name: string;
	};
}

export const Input = (props: InputPropType) => {
	const [uploadedFileUrl, setUploadedFileUrl] = useState(null);
	const [isFileLoading, setIsFileLoading] = useState(false);

	const onChangeFile = (event: any) => {
		setIsFileLoading(true);

		if (event.target.files[0]) {
			UploadImage({
				image: event.target.files[0],
				onUpload: (uploadedImage) => {
					setUploadedFileUrl(uploadedImage.url);
					setIsFileLoading(false);
				},
			});
		}
	};

	switch (props?.type) {
		case 'file':
			return (
				<>
					<div className="relative mt-4">
						<div className="max-w-xl">
							{!isFileLoading && !uploadedFileUrl && (
								<label className="flex justify-center items-center w-full max-w-[300px] h-[300px] mx-auto transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none hover:border-gray-400 focus:outline-none relative cursor-pointer">
									<span className="flex items-center space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-gray-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
											/>
										</svg>
										<span className="font-medium text-gray-600">
											{props.label}
											<span className="text-blue-600 underline ml-1">
												browse
											</span>
										</span>
									</span>
									<input
										type={props.type}
										name={props.name}
										className="hidden"
										onChange={(event: any) => {
											onChangeFile(event);
										}}
										onClick={(event) => {
											(event.target as HTMLInputElement).value = null;
										}}
										value={uploadedFileUrl}
									/>
								</label>
							)}

							{!isFileLoading && uploadedFileUrl && (
								<div className="flex justify-center items-center w-full max-w-[300px] h-[300px] mx-auto transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none hover:border-gray-400 focus:outline-none relative">
									<img className="w-full" src={uploadedFileUrl} alt="upload" />
									<span
										className="w-10 h-10 bg-white text-red shadow absolute -top-2 -right-2 rounded-full flex items-center justify-center text-2xl z-10 cursor-pointer"
										onClick={() => {
											setUploadedFileUrl(null);
										}}
									>
										{Icons.closeIcon}
									</span>
								</div>
							)}

							{isFileLoading && (
								<div className="flex justify-center items-center w-full max-w-[300px] h-[300px] mx-auto transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none hover:border-gray-400 focus:outline-none relative cursor-not-allowed">
									<span className="">Loading</span>
								</div>
							)}
						</div>
					</div>
				</>
			);

		default:
			return (
				<div className="relative mt-4">
					<input
						className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black-light bg-transparent rounded border border-transparent-gray appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
						type={props.type ? props.type : 'text'}
						name={props.name}
						placeholder=" "
						required={props.required}
					/>
					<label className="absolute text-sm text-black-light duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
						{props.label ? props.label : 'Input Label'}{' '}
						{props.required && <span className="text-red">*</span>}
					</label>
				</div>
			);
	}
};

interface FormPropType {
	children: JSX.Element | JSX.Element[];
	title?: string;
	className?: string;
	method?: string;
	action?: string;
	onSubmit?: CallableFunction;
}

const Form = (props: FormPropType) => {
	return (
		<>
			<Card>
				<form>
					{props.title && (
						<h1 className="text-2xl mb-4 underline">{props.title}</h1>
					)}
					<>{props.children}</>
				</form>
			</Card>
		</>
	);
};

export default Form;
