import React from 'react';

function Home() {
	return (
		<section id="home" className="hero-section">
			<div className="container">
				<div className="row align-items-center min-vh-80">
					<div className="col-lg-8 mx-auto text-center">
						<h1 className="display-4 fw-bold mb-4">Welcome to Our Midterm Laboratory 1</h1>
						<p className="lead mb-4">
							This project demonstrates how to structure a React application into multiple reusable components, 
							build a simple single-page layout using React, and apply teamwork by assigning each group member a section to design.
						</p>
						<div className="d-flex justify-content-center gap-3">
							<a href="#about" className="btn btn-light btn-lg">Learn More</a>
							<a href="#contact" className="btn btn-outline-light btn-lg">Get In Touch</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
