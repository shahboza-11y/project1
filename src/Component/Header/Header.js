import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light border">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <img src="img/HeaderImg/Logo.png"  alt="error image " className="ms-5" />
                    <div class="collapse navbar-collapse d-flex justify-content-end me-5" id="navbarNavDropdown">
                        <ul class="navbar-nav " id="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Features
                                </a>

                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Get started
                                </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Enterprice</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Pricing</a>
                            </li>

                        </ul>
                        <button className="btn btn-primary">Free trial</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
