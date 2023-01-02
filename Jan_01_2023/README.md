# Laying the foundation

Question: What is JSX?

- JSX is a syntax extension of Javascript.
- Instead of using everytime React element React let us use JSX. Using JSX while writing code we understand what UI should look like.
- JSX produces react element with the minimal effort.
- Javascript expressions are inserted between curly braces inside JSX "{JS expression}".
- No need to put double quotes around curly braces when parsing javascript expressions when assigning attribute
    => Example - <img src="some.jpeg"> or <img src={user.avatar}> not <img src="{user.avatar}">
- JSX follows more Javascript more than html, hence, ReactDOM uses camelCase naming convention for attribute names instead of HTML attribute names
    => class becomes **className** and tabindex becomes **tabIndex**
- Everything in react is converted into string before being rendered to UI. This prevents XSS 