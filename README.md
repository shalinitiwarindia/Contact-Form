![Screenshot 2024-11-28 205749](https://github.com/user-attachments/assets/36657524-da73-4377-8ddb-d90ce67c659b)



Description of the Contact List Application

This Contact List application is a simple React-based project designed for managing a list of contacts. It provides an intuitive interface for adding, viewing, and deleting contacts with minimal styling to ensure clarity. Below is a breakdown of its components and functionality:

1. App Component (App.js)
Purpose: Serves as the main entry point of the application.
Features:
Initializes a list of contacts using useState with predefined contact data.
Provides controlled inputs for adding a new contact (name and phone).
Includes validation to ensure both fields are filled before adding a contact.
Updates the contact list state when a new contact is added or deleted.
Passes the contact list and deleteContact function as props to the ContactList component.
Styling: The App.module.css file provides a clean layout, including styled inputs, buttons, and body.
2. Contact List Component (ContactList.jsx)
Purpose: Displays the list of all contacts.
Features:
Maps through the contacts array to render a list of ContactCard components.
Provides a deleteContact function to remove a contact by ID, passed down to the ContactCard component as a prop.
Styling:
ContactList.module.css ensures the list is centered, and padding is added for aesthetic spacing.
3. Contact Card Component (ContactCard.jsx)
Purpose: Represents an individual contact.
Features:
Displays the contact's name and phone number.
Supports expand/collapse functionality to show/hide the phone number.
Includes a "Delete" button to remove the contact.
State Management:
Maintains a local state, isExpanded, to handle toggle behavior for showing/hiding the phone number.
Styling:
Uses ContactCard.module.css for:
Card design with hover effects.
Enhanced delete button with hover effects for better UX.
Styling of the phone number when expanded.
4. Add Contact Functionality
Details:
Controlled input fields (name and phone) are used to capture user input.
The addContact function ensures that both fields are filled before adding a contact.
Adds a new contact with a unique id (using Date.now() for simplicity).
5. Delete Contact Functionality
Details:
The deleteContact function filters the contact list to exclude the contact with the matching id.
Passed as a prop to both ContactList and ContactCard.

Styling Overview
Global Styling (App.module.css):
Defines the overall layout with a centered title and input section.
Uses modern styles for buttons and inputs, such as hover states and smooth transitions.
Component-specific Styles:
ContactList.module.css ensures proper alignment of the list container.
ContactCard.module.css adds polished card-like visuals and interactive hover effects.

How the Application Works
Users are greeted with a Contact List title and a form for adding contacts.
Each contact is displayed as a card with the name visible by default.
Clicking on a card expands it to show the phone number.
Users can:
Add new contacts by entering a name and phone number, which updates the list dynamically.
Delete contacts using the "Delete" button, which removes the contact instantly.

Key Features Summary
Interactive UI: Expandable cards and hover effects improve the user experience.
Dynamic Updates: React's state ensures the list updates immediately when contacts are added or deleted.
Simple and Clean Code Structure: Separate components and modular CSS files promote scalability and readability.
This contact list application serves as a fundamental React project, showcasing basic state management, props handling, and modular design. It can be extended further with features like search functionality, data persistence (e.g., using local storage), or additional contact details.
