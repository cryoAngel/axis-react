import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'

const Contact = () => {
    return (
        <div className="Middle-end container">
            <div>
                <h1 className="text-center text-white">DIRECT LINE</h1>
                <h6 className="text-center text-white">PER QUALSIASI INFORMAZIONE LA INVITIAMO AD UTILIZZARE il seguente modulo. Verrà ricontattato telefonicamente o via Email NEL PIU’ BREVE TEMPO possibile.
                    (I campi contrassegnati con * sono obbligatori)</h6>
                <div className="line-div"></div>
                <div className="form">
                    <form className="form-group needs-validation">
                        <div className="select0 d-flex flex-column py-3 w-100">
                            <label className="label1 text-light">OGGETTO DEL CONTTATO</label>
                            <select className="custom-select custom-css0 p-2 rounded" id="select0">
                                <option selected>scegli ...</option>
                                <option value="first option">first option</option>
                                <option value="Second option">Second option</option>
                                <option value="Third option">Third option</option>
                                <option value="Fourth option">Fourth option</option>
                            </select>
                        </div>

                        <div className="d-flex flex-column py-3 w-100">
                            <label className="text-light">MESSAGGIO</label>
                            <textarea className="p-3 rounded" placeholder="Message">

                            </textarea>
                        </div>
                        <div className="d-flex flex-column py-3 w-100">
                            <label className="text-light">BUSINESS UNIT</label>
                            <select className="custom-select p-2 rounded">
                                <option selected>scegli ...</option>
                                <option value="first option">first option</option>
                                <option value="Second option">Second option</option>
                                <option value="Third option">Third option</option>
                                <option value="Fourth option">Fourth option</option>
                            </select>
                        </div>

                        <div className="radio d-flex flex-row justify-content-start">
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input"></input>
                                <label className="form-check-label text-light">SIG. /</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input"></input>
                                <label className="form-check-label text-light">SIG.RA</label>
                            </div>
                        </div>
                        <div className="input form-data d-flex pt-5 flex-row">
                            <div className="column-1 form-group d-flex flex-column w-100">
                                <label className="text-light">Nome *</label>
                                <input className="form-control rounded" type="text" name="name" placeholder="Nome" required></input>
                                <label className="text-light">Telefono *</label>
                                <input className="form-control rounded" type="tel" name="cell" placeholder="Tel:" required></input>
                                <label className="text-light">Indirizzo *</label>
                                <input className="form-control rounded" type="text" name="address" placeholder="Indirizzo" required></input>
                                <label className="text-light">Società *</label>
                                <input className="form-control rounded" type="text" name="compagni" placeholder="Società" required></input>

                            </div>
                            <div className="column-2 form-group d-flex flex-column w-100">
                                <label className="text-light">Cognome *</label>
                                <input className="form-control rounded" type="text" name="lastname" placeholder="Cognome" required></input>
                                <label className="text-light">Telefono Fisso</label>
                                <input className="form-control rounded" type="text" name="phone" placeholder="Telefono fisso:"></input>
                                <div className="inner d-flex flex-row justify m-0">
                                    <div className="div1">
                                        <label className="text-light">Provincia *</label>
                                        <input className="form-control rounded" type="text" name="county" placeholder="Provincia" required></input>
                                    </div>
                                    <div className="div2">
                                        <label className="text-light">CAP *</label>
                                        <input className="form-control rounded" type="text" name="postCode" placeholder="Cap ex: 20139" required></input>
                                    </div>
                                </div>
                                <label className="text-light">Email</label>
                                <input className="form-control rounded" type="email" name="email" placeholder="E-mail @"></input>
                            </div>


                        </div>
                        <div className="privacy d-flex flex-column pt-3">
                            <label className="text-light py-2">
                                Privacy Policy
                                Ai sensi e per gli effetti degli articoli art. 13 del Regolamento UE 679/2016,
                                presa visione della specifica informativa di XXXXXXXXXX Spa sul trattamento
                                dei dati personali il sottoscritto esprime o nega il proprio consenso per
                                le seguenti finalità: </label>
                            <input type="checkbox"></input>
                        </div>
                        <div className="line-end"></div>
                        <button className="button btn-transparent" type="submit" value="CONFERMA >">CONFERMA &gt;</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact