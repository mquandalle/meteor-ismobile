# Meteor.isMobile

Relying on the user agent to adapt functionalities of an application is
generally not recommended. It's far better to test directly the abilities of the
client device (size, rotation, touch screen, local storage, etc.).

Nevertheless because the world is not perfect, you sometimes want to use the
ugly `Meteor.isMobile` boolean variable provided by this package. Its value is
based on the user agent string, so use it at your own risks!
