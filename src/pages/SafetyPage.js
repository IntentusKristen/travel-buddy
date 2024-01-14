import React from 'react'
import '../SafetyPage.css';
import { Link } from "react-router-dom";

const SafetyPage = () => {
  return (
    <div className="safetyPageContainer">
      <h1>TravelBuddy</h1>
      <p>Hello there! This is TravelBuddy, an application that makes navigating the real world safer!</p> 
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app">Map</Link>
          </li>
          <li>
            <Link to="/userInfo">Profile</Link>
          </li>
        </ul>
      </nav>
      <h2>Safety Tips for Regular Outings</h2>
        <ol>
          <li>Plan your route
            <ul>
              <li>Know where you are going.</li>
              <li>Stick to well-lit, populated paths.</li>
            </ul>
          </li>
          <li>Stay Aware of Your Surroundings
            <ul>
              <li>Avoid distractions like using your phone or listening to music with both earphones in.</li>
              <li>Being alert helps you to notice any unusual behavior or potential dangers around you.</li>
            </ul>
          </li>
          <li>Trust Your Instincts
            <ul>
              <li>If something feels off, trust your gut feeling.</li>
              <li>Avoid or leave areas or situations where you feel uncomfortable.</li>
              <li>If you feel threatened or followed, head to a public place such as a store, restaurant, or gas station.</li>
            </ul>
          </li>
          <li>Inform Someone
            <ul>
              <li>Let a friend or family member know your plans, where you are going, and when you expect to return.</li>
              <li>Check in with them regularly.</li>
            </ul>
          </li>
          <li>Be Cautious With Strangers
            <ul>
              <li>Be wary of strangers asking for directions or time.</li>
              <li>Keep interactions brief and maintain a safe distance.</li>
            </ul>
          </li>
          <li>Emergency Services
            <ul>
              <li>Know the local emergency number.</li>
              <li>You are here. This is your local emergency number.</li>
            </ul>
          </li>
        </ol>
      <h2>Safety Tips for Traveling</h2>
        <ol>
          <li>Research Your Destination
            <ul>
              <li>Before you travel, research the safety, local laws, customs, and entry requirements of your destination.</li>
              <li>Check for any travel advisories or alerts for the region.</li>
            </ul>
          </li>
          <li>Keep Your Documents Safe
            <ul>
              <li>Make copies of important documents (passport, visa, driver’s license, travel insurance).</li>
              <li>Keep digital copies in a secure online storage and physical copies separate from the originals.</li>
            </ul>
          </li>
          <li>Stay Informed
            <ul>
              <li>Register with your embassy or consulate when traveling abroad. This can be helpful in case of an emergency.</li>
              <li>Stay updated on current news and conditions in the area you are visiting.</li>
            </ul>
          </li>
          <li>Be Cautious with Money and Valuables
            <ul>
              <li>Avoid carrying large amounts of cash. Use credit cards or traveler’s checks when possible.</li>
              <li>Consider using a money belt or a neck wallet to keep your money hidden.</li>
            </ul>
          </li>
          <li>Respect Local Culture and Laws
            <ul>
              <li>Dress appropriately and respect local customs and traditions.</li>
              <li>Be aware of and adhere to local laws, which can be different from those in your home country.</li>
            </ul>
          </li>
          <li>Emergency Preparedness
            <ul>
              <li>Know basic emergency phrases in the local language.</li>
              <li>Be aware of the location of the nearest embassy or consulate, hospital, and other emergency facilities.</li>
            </ul>
          </li>
        </ol>
    </div>
  )
}

export default SafetyPage