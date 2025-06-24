const HomePage = () => {
  return (
    <div>
        <h2>Homepage</h2>
        <h3>Welcom Aryan!</h3>
        <p>Following are Questions</p>
      <p>
        create two components: a parent component that acts as a provider and a
        child component that consumes the context. Create a context to manage a
        user's authentication status (logged in or out). Implement a login
        button in the child component that, when clicked, updates the
        authentication status in the context to "logged in." Display a message
        in the child component based on the user's authentication status. If the
        user is logged in, show "Welcome, [username]!" Otherwise, display
        "Please log in."
      </p>
      <p>
        Extend the previous application to demonstrate the use of nested
        contexts. Create a new context to manage user preferences (e.g., theme
        preference). Modify the parent component to provide both the
        authentication and preferences contexts. Create a child component that
        consumes both contexts. Allow the user to change their theme preference
        (light/dark) using a button in the child component. Display the theme
        preference in the UI and adjust the component's styling accordingly.
      </p>
      <p>
        create pages: Home and About. Implement file routing. Create navigation
        links to switch between the Home and About pages. Display appropriate
        content on each page. Add a "404 Not Found" page for any invalid routes.
      </p>
      <p>
        Enhance the previous application by adding protected pages that require
        authentication. Create a login page with a form that accepts a username
        and password. Implement authentication logic (e.g., hardcode a username
        and password for now). Secure the About page so that it can only be
        accessed by authenticated users. Redirect unauthenticated users to the
        login page. Display a message on the Home page welcoming the
        authenticated user.
      </p>

      <p>
        Extend the application to include nested routes for a more complex user
        interface. Create a new section of your application (e.g., a Dashboard)
        with multiple sub-pages (e.g., Dashboard, Profile, Settings). Implement
        nested routing within this section using nested routes. Add navigation
        links to switch between the sub-pages within the Dashboard section.
        Customize the content displayed on each sub-page.
      </p>

      <p>
        Create a list of items (e.g., products, articles) in your application.
        Implement dynamic routing to display details for each item when clicked.
        Create a route parameter that represents the item's ID in the URL (e.g.,
        "/products/:id"). Fetch item details based on the route parameter and
        display them on the detail page. Add a "Go Back" button on the detail
        page to return to the list.
      </p>
    </div>
  );
};

export default HomePage;
