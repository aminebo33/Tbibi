# Tbibi

Tbibi is a web application designed to diagnose user symptoms and guide them to the right healthcare professionals. Originally built with **React**, **Flask**, and **MongoDB**, this is a static version of the app showcasing the **frontend** built purely with **React**. The full version, using Flask and MongoDB, allows for dynamic symptom diagnosis and backend interactions.

## Features

- **Symptom Diagnosis**: Helps users identify their symptoms and suggests the appropriate medical specialist.
- **Doctor Recommendations**: Provides a list of doctors based on the user's symptoms and location.
- **Appointment Scheduling**: Allows users to schedule appointments with doctors directly from the app.
- **Contact Page**: Includes a contact page where users can reach out to the admin for support or inquiries.

## Technologies Used

- **React**: For building the frontend of the app, leveraging modern React features like **hooks** for state management and lifecycle management.
- **Vite**: For fast development and build toolchain.

## React Features

This project utilizes various React features, including:

- **React Hooks** to manage the component's state and side effects, respectively. useState is used for handling local state, such as form inputs or flags, while useEffect is used for side effects like data fetching and DOM manipulation.

- **React Router DOM**: For seamless page navigation and removing full-page reloads, which improves the user experience by making transitions smoother and faster.

## Libraries Used

- **Toastify**: This library allows for easy and customizable toast notifications, providing users with alerts and messages that appear and disappear at the top or bottom of the screen.
- 
- **Datepicker**: This component provides an intuitive date picker for users to select dates. It simplifies the process of date selection and can be customized for different date formats, making it a great choice for appointment scheduling or filtering by date.

- **Select**: This library provides a customizable select dropdown component that can handle dynamic options and multi-selects. It helps improve the user experience when choosing from a list of options, like choosing a doctor, symptom, or location.

- **PropTypes**: This library is used to validate the types of props passed into components, ensuring that the data passed down is of the expected format and improving the maintainability of the application.

## Cross-Browser Compatibility

The app includes custom scrollbars designed to be consistent across major browsers (Chrome, Firefox, Safari, Edge), ensuring a uniform look and feel across different platforms. The design is also optimized for **mobile** and **small browsers**, making it fully responsive on a variety of devices.

## Responsive Design

- **Mobile-First Approach**: The app is designed with mobile users in mind, ensuring that the layout is adapted for various screen sizes, from large desktop monitors to small mobile devices.
- **Media Queries**: Utilizes CSS media queries to adjust the layout and styling for different device widths, ensuring a smooth, adaptive experience.

## Live Demo

You can view the static version of the app here:

[Live Demo](https://aminebo33.github.io/Tbibi/)
