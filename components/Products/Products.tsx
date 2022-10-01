import React, { useEffect, useState } from 'react';
import { FetchData } from '../../pages/api';
import { Button, Product } from '../index';
import Loader from './Loader';

const Products = ({
	isVisible,
	count,
	isMinimal,
	loaderCount,
}: {
	isVisible: any;
	count: number;
	isMinimal?: boolean;
	loaderCount?: number;
}) => {
	const [productCount, setProductCount] = useState(0);
	const [perLoading, setPerLoading] = useState(count);
	const [productsData, setProductsData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const getProduct = (data: any) => {
		setProductsData(data);
		if (data.length > 0) {
			const newProductData = data.slice(0, perLoading);
			// set product
			if (productsData) {
				setProductsData(productsData.concat(newProductData));
			} else {
				setProductsData(newProductData);
			}

			// set product count
			setProductCount(() => {
				if (data.length !== perLoading + 1) {
					return null;
				} else {
					return productCount + perLoading;
				}
			});
		}
		setIsLoading(false);
	};

	const callProduct = (countStart: number) => {
		FetchData({
			query: `*[_type == "product"] [${countStart}...${
				countStart + perLoading + 1
			}]`,
			callBack: getProduct,
		});
	};

	const loadMoreHandle = () => {
		setIsLoading(true);
		callProduct(productCount);
	};

	useEffect(() => {
		if (isVisible) {
			callProduct(productCount);
		}
	}, [isVisible]);

	return (
		<div className="py-8 pb-16">
			<div className="container m-auto">
				{productsData && (
					<>
						<h1 className="text-3xl text-black">All Product.</h1>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center sm:justify-start gap-6 pt-4">
							{productsData?.map((product: any, i: number) => {
								return (
									<Product key={i} product={product} isMinimal={isMinimal} />
								);
							})}
						</div>
						{productCount !== null && (
							<Button
								onClick={loadMoreHandle}
								className="bg-primary-dark mt-8 mx-auto disabled:bg-black-light"
								disabled={isLoading}
							>
								{isLoading ? 'loading...' : 'Load More'}
							</Button>
						)}
					</>
				)}
				{!productsData && <Loader rows={loaderCount} />}
			</div>
		</div>
	);
};

export default Products;
