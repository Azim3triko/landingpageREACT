import React from "react";

export function Jumbotron() {
	return (
		<div className="container">
			<div className="justifi-content-center m-0 row my-3">
				<div
					className="card m-2"
					style={{ backgroundColor: "#d9d9d9" }}>
					<div className="card-body">
						<h1 className="card-title fs-1">{"A Warm Welcome!"}</h1>
						<p className="card-text fs-5">
							{
								"Lorem ipsum dolor sit amet, consecteur adipisicing elit. Ipsa, ipsam,eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
							}
						</p>
						<a href="#" className="btn btn-primary fs-5">
							{"Call to action!"}
						</a>
					</div>
				</div>
			</div>
		</div>
		// );
	);
}
