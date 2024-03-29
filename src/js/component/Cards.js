import React from "react";

export function Cards() {
	return (
		<div className="container">
			{/* <div className="justifi-content-center m-0 row my-3">
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
			</div> */}
			<div className="d-sm-flex">
				<div className="card text-center">
					<img
						src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">{"Card title"}</h4>
						<p className="card-text">
							{
								"Lorem ipsum dolor sit amet, consecteur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
							}
						</p>
						<a href="#" className="btn btn-primary">
							{"Find Out More!"}
						</a>
					</div>
				</div>
				<div className="card mx-1 text-center">
					<img
						src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">{"Card title"}</h4>
						<p className="card-text">
							{
								"Lorem ipsum dolor sit amet, consecteur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
							}
						</p>
						<a href="#" className="btn btn-primary">
							{"Find Out More!"}
						</a>
					</div>
				</div>
				<div className="card me-1 text-center">
					<img
						src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">{"Card title"}</h4>
						<p className="card-text">
							{
								"Lorem ipsum dolor sit amet, consecteur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
							}
						</p>
						<a href="#" className="btn btn-primary">
							{"Find Out More!"}
						</a>
					</div>
				</div>
				<div className="card text-center">
					<img
						src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body ">
						<h4 className="card-title">{"Card title"}</h4>
						<p className="card-text">
							{
								"Lorem ipsum dolor sit amet, consecteur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
							}
						</p>
						<a href="#" className="btn btn-primary mx-auto">
							{"Find Out More!"}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
