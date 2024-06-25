import React from "react";
import "../style/dashboard.css";
import top from "../images/top.jpg";

function Home() {
    return (
        <div id="dashboard">
            <div id="top-image">
                <img src={top} alt="top" />
            </div>

            <div id="card-wrapper">
                <div className="card">
                    <i className="fas fa-university"></i>
                    <div className="card-right">
                        <h3>Premium Banking</h3>
                        <p>A premier banking program designed with an array of offers.</p>
                    </div>
                </div>
                <div className="card">
                    <i className="fas fa-piggy-bank"></i>
                    <div className="card-right">
                        <h3>Savings Account</h3>
                        <p>Pioneer Savings Account combines a series of top privileges.</p>
                    </div>
                </div>
                <div className="card">
                    <i className="fas fa-shield-alt"></i>
                    <div className="card-right">
                        <h3>Robust Security</h3>
                        <p>Tailor made solution for your delight, 100% safe and secure.</p>
                    </div>
                </div>
            </div>

            <div id="content-container">
                <div className="content-box">
                    <div className="left">
                    <br></br>  <br></br>    <br></br>  <br></br><br></br>
                        <img src="https://www.bankassafa.com/themes/custom/bank_assafa/images/logos/logo-assafa-menu.png" alt="bank" />
                    </div>
                    <div className="right">
                        <h1>Qui sommes-nous ?</h1>
                        <p>Le Comité des Établissements de Crédit, a émis le 02 Janvier 2017, un avis favorable sur les demandes formulées pour la création de cinq banques participatives au Maroc dont Bank Assafa. La présence de Dar Assafaa dans le marché de la finance alternative depuis 2010, a permis aux équipes de développer une expertise métier et une connaissance des besoins et aspirations des marocains.

Bank Assafa est un établissement bancaire 100% marocain spécialisé dans la finance participative qui propose un ensemble de produits bancaires éthiques, conformes aux directives du conseil supérieur des Oulémas.</p>
                    </div>
                </div>
                <div className="content-box">
                    <div className="left">
                    <br></br>  <br></br><br></br>
                        <img src="https://www.bankassafa.com/sites/default/files/2019-12/Cartes/CARTE-GOLD-BANK-ASSAFA.png" alt="mission" />
                    </div>
                    <div className="right">
                        <h1>Mission</h1>
                        <p>Le Comité de la Charia pour la finance participative de la Banque Assafa est responsable d'évaluer la conformité des produits financiers participatifs, des circulaires de Bank Al-Maghrib, des opérations d'assurance takaful, et des émissions de certificats de sukuk avec les principes de la charia islamique. Les établissements financiers participatifs peuvent solliciter un avis de conformité à travers les régulateurs financiers, qui transmettent les demandes au Comité relevant du Conseil Supérieur des Oulémas.</p>
                    </div>
                </div>
                <div className="content-box">
                    <div className="left">
                    <br></br>  <br></br><br></br>
                        <img src="https://i.pinimg.com/originals/57/0c/9e/570c9e66391ccae6756b9ba775477f09.png" alt="vision" />
                    </div>
                    <div className="right">
                        <h1>Vision</h1>
                        <p>Notre vision à Bank Assafa est de devenir le leader incontesté de la finance participative, en offrant des solutions innovantes et éthiques qui répondent aux besoins financiers de nos clients à travers le monde. Nous aspirons à être reconnus non seulement pour notre excellence opérationnelle et notre rentabilité, mais aussi pour notre engagement indéfectible envers les principes de la charia islamique. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
