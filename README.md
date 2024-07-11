# Onion Architecture

- Each layer is dependent on only one inner layer.
- The fundamental principle is that each layer depends on a layer closer to the center.
- Dependencies are one-way, moving inward.
- Unlike traditional architecture, the data layer (Persistence) is designated as the outermost layer rather than the innermost layer. This allows for development independent of the source of the data in the application.
**Onion Architecture is a Clean Architecture Pattern.**

![Process](https://miro.medium.com/v2/resize:fit:640/format:webp/1*0Pg6_UsaKiiEqUV3kf2HXg.png)



**Domain Layer** - It is the core layer.There are objects related to the work to be done. Exceptions related to entities, value objects, enumerations, entities.

**Repository and Service Interfaces Layer/ Application Layer** - 
The layer between the domain and business layers is an abstraction layer. All service interfaces are defined here. The Repository and Service layers reference the Domain layer. The purpose of this layer is to adopt a loosely coupled approach in data access. DTO, ViewModel, Mapping, Validations, CQRS Pattern.

**Persistence Layer** - It is the layer that handles database operations/data access logic. The concrete objects of the repository interfaces in the Application layer are found here. DbContext, Migration, Configurations, Seeding, Repository Concrete Class.

**İnfrastructure Layer** - We can say that it is a layer that can integrate with the Persistence layer. Ultimately, both are business layers. The only difference from Persistence is that it is the layer where we carry out operations/services/processes outside of the database. All services other than data access from the database are built in this layer. Email/SMS, Notification, Payment.

**Presentation Layer** - It is the layer where the user interacts with the application.  Web API, MVC.

