import React from "react";
import whatsappicon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

export default function TeacherItem() {
	return (
		<>
			<article className="teacher-item">
				<header>
					<img
						src="https://avatars3.githubusercontent.com/u/6287961?s=460&u=97514920df72e0f72cf9854271cd4ddce7f8fb12&v=4"
						alt=""
					/>
					<div>
						<strong>Diego Fernandos</strong>
						<span>Quimicas</span>
					</div>
				</header>
				<p>Aqui estão os textos que descrevem os professores</p>
				<footer>
					<p>
						Preço/hora
						<strong>R$ 80,00</strong>
					</p>
					<button type="button">
						<img src={whatsappicon} alt="" />
						Entrar em contato
					</button>
				</footer>
			</article>
		</>
	);
}
