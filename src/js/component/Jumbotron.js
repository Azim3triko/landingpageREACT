import React from "react";

export function Jumbotron() {
	return (
		<div className="container p-4" style={{ backgroundColor: "#d9d9d9" }}>
			<h1 style={{ fontSize: "48px" }}>A Warm Welcome!</h1>
			<h5>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.Various versions have evolved over the years, sometimes
				by accident, sometimes on purpose.
			</h5>
			<buttom className="btn btn-primary">Call to action!</buttom>
		</div>
	);
}
