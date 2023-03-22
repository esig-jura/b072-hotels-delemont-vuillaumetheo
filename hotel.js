﻿/**
 * @author      Steve Fallet <steve.fallet@divtec.ch>
 * @version     1.0
 * @since       2018-11-19
 *
 * http://usejsdoc.org/
 */

  "use strict";
  // Récupération des éléments HTML et pas leur valeur ou contenu !!!
  const formulaire = document.querySelector('form');
  console.log(formulaire);
  let listeHotel = document.getElementById("lis_hotel");
  console.log(listeHotel);
  let txtNbrChambre = document.getElementById('txt_nbrChambre');
  console.log(txtNbrChambre);
  /**
   * Retourne le nom de l'hotel sélectionné par le visiteur
   *
   * @returns {String} Nom de l'hotêl ou "0" si pas de sélection
   */
  function getHotel() {
      return listeHotel.value;
  }

  /**
   * Retourne le nombre de chambres saisi par le visiteur
   *
   * @returns {Number} Nombre de chambres ou NaN (Not A Number)
   */
  function getNbChambre() {
      return parseInt(txtNbrChambre.value);
  }

  /**
   * Retourne le type de chambre sélectionné ou ""
   *
   * @returns {String} Type de chambre ou ""
   */
  function getChambre() {

  }

  /**
   * Retourne les options choisies par le visiteur
   *
   * @returns {Array} tableau des éléments checkbox cochés
   */
  function getOptions() {

  }

  /**
   * Valide la saisie utilisateur
   *
   * Retourne un message d'erreur au format HTML "<ul><li>erreur 1</li>...</ul>"
   * ou chaine vide si tout est OK.
   *
   * @returns {String}    Chaine vide si pas d'erreur ou <ul> d'erreurs
   */
  function valideSaisie() {

  }

  /**
   * Affiche la confirmation de réservation
   */
  function afficheConfirmation() {

  }

  /**
   * Fonction appellé lors de l'envoi du formulaire
   * Test la saisie et affiche la confirmation ou le message d'erreur
   *
   * @param event Objet représentant l'événement
   */
  function reserver(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    console.log(getHotel(), getNbChambre());
  }

  // Gestion des événements
  formulaire.addEventListener('submit', reserver);

