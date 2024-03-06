<div align="center">
  <h1>CarHub</h1>  
</div>

[![pl](https://img.shields.io/badge/lang-pl-red.svg)](https://github.com/Karo1808/CarHub/blob/master/README.pl.md)

### Description

CarHub is a web application that allows the user to browse cars based on various criteria it also provides details about the selected vehicle and images captured from a variety of angles

This web application was built following the [tutorial by JavaScriptMastery](https://www.youtube.com/watch?v=pUNSHPyVryU&pp=ygUZamF2YXNjcmlwdCBtYXN0ZXJ5IGNhcmh1Yg%3D%3D)

### Demo

[Website link](https://car-hub-karo.vercel.app/)

### Features

- **Modern and User-Friendly Interface:** Experience a sleek and intuitive interface designed for effortless navigation and enhanced user engagement.
- **Search Functionality with Autocomplete:** Quickly find desired cars with an intuitive search bar featuring autocomplete suggestions, streamlining the browsing process.
- **Filter Functionality by Year and Fuel Type:** Easily refine your car search based on specific criteria such as year of manufacture and fuel type, ensuring tailored results.
- **Comprehensive Car Details:** Access detailed information about each car, including specifications, features, and performance insights, empowering informed decision-making.
- **Extensive Image Gallery:** Explore cars from every angle with a rich collection of high-quality images, providing a comprehensive view of each vehicle's design and aesthetics.
- **Modal Functionality for Image Details:** Dive deeper into car imagery with modal windows that showcase images in a larger format, allowing for closer inspection and appreciation.
- **Show More Functionality:** Enjoy uninterrupted browsing with a seamless "show more" feature, dynamically loading additional content as you explore, without interruption.
- **Fully Responsive Design:** Access CarHub effortlessly across various devices and screen sizes, ensuring a consistent and optimized experience whether browsing on a desktop, tablet, or smartphone.

### Technologies used

- **Next.js 13:** A React Framework for building modern web applications with Server Side Rendering
- **React:** A JavaScript library for building user interfaces.
- **Typescript:** A superset of JavaScript that adds static typing to the language.
- **Tailwind CSS:** A CSS utility framework for rapidly building custom designs.
- **Headless UI:** A UI component library that provides unstyled, accessible components that can be styled with Tailwind CSS
- **Rapid API:** An API used to fetch car details
- **Imagin Studio API:** An API that provides high quality car images

### Installation

Clone the repository locally

```bash
git clone https://github.com/Karo1808/CarHub.git
```

Install the required dependencies

```bash
npm install
```

Create an .env.local file and add the following environment variables

```bash
# Imagin API KEY
NEXT_PUBLIC_API_KEY=
# RAPID API KEY
RAPID_API_KEY=
```

Run the website locally

```bash
npm run dev
```
