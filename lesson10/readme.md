This is the project for lesson 9 - OOP and SOLID

✅ TypeScript project

✅ Hierarchy:
    src/
        │
        ├── interfaces/
        │   ├── i-component.ts
        │   ├── i-clickable.ts
        │   └── i-typeable.ts
        │
        ├── components/
        │   ├── base-component.ts
        │   ├── button.ts
        │   ├── input.ts
        │   └── checkbox.ts
        │
        ├── pages/
        │   ├── page.ts
        │   ├── login-page.ts
        │   └── dashboard-page.ts
        │
        └── index.ts

✅ OOP
        Abstraction:    base-component.ts; page.ts; i-component.ts
        Encapsulation:  public/protected/private modifiers
        Inheritance:    BaseComponent → Input/Button/Checkbox;
                        Page → LoginPage/DashboardPage
        Polymorphism:   render() and interact() call dynamically; page.ts has interactWithAll()

✅ S (SRP) each class has only one responsibility
✅ O (OCP) new components can be added without changing the base one
✅ L (LSP) all components are interchangeable through IComponent interface
✅ I (ISP) interfaces are separated (IClickable, ITypeable)
✅ D (DIP) page depends only on the IComponent abstraction

✅ Async functions: click(), type(), interact(), simulateDelay()

✅ Function relates with interface: interactWithAll()

Console:

npx ts-node ./src/index.ts 

==== Start UI test ====
Rendering page: LoginPage
Rendering input: Username //input[@id='username']
Rendering input: Password //input[@id='password']
Rendering button: Login //button[@id='loginBtn']
Typing 'test user' into input Username with locator //input[@id='username']
Finished typing 'test user'
Typing 'password123' into input Password with locator //input[@id='password']
Finished typing 'password123'
Clicking button Login with locator //button[@id='loginBtn']
Button Login clicked!
---- Login test completed ----
Rendering page: DashboardPage
Rendering button: Logout //button[@id=logoutBtn]
Rendering checkbox: Accept Terms //input[@id=acceptTerms]
Checkbox Accept Terms toggled //input[@id=acceptTerms]
Clicking button Logout with locator //button[@id=logoutBtn]
Button Logout clicked!
---- Dashboard test completed ----
==== End UI test ====
