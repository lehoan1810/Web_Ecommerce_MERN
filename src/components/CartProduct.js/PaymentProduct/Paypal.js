import React, { useEffect, useRef } from "react";

const Paypal = ({ money }) => {
	const paypal = useRef();
	console.log(money);

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions, err) => {
					return actions.order.create({
						intent: "CAPTURE",
						purchase_units: [
							{
								description: "Cool looking table",
								amount: {
									currency_code: "USD",
									value: `${money}`,
								},
							},
						],
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();
					console.log(order);
				},
				onError: (err) => {
					console.log(err);
				},
			})
			.render(paypal.current);
	}, []);

	return (
		<div>
			<div ref={paypal}></div>
		</div>
	);
};

export default Paypal;
