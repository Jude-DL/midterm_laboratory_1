import React from 'react';

function Header() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<a className="navbar-brand" href="#home">✨ Midterm Laboratory 1</a>
				<button 
					className="navbar-toggler" 
					type="button" 
					data-bs-toggle="collapse" 
					data-bs-target="#navMenu" 
					aria-controls="navMenu" 
					aria-expanded="false" 
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navMenu">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a className="nav-link" href="#home">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#about">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
