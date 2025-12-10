# [Routes](RESTful_Resources_Routes_in_Rails.md)
# Redirection, the Flash and the Session

![](IMG-20251210185502119.png)

Code:  
![](IMG-20251210185502145.png)
> If we use `redirect_to new_movies_path` instead of `render :new` in `create` method, what user filled in formerly will fade away.

The `@movie = Movie.new` in `new` is used to render the view.
# Dealing with Forms
![](IMG-20251210185502167.png)

![](IMG-20251210185502190.png)

## Strong Parameters
The controller decides which form field parameters are allowed to be passed to the model for update/create...why?

![](IMG-20251210185502214.png) ^9gx3ke

_**[Old-school, check for new version](MVC.md)**_
# Summary
![](IMG-20251210185502256.png)
![](IMG-20251210185502280.png)
![](IMG-20251210185502309.png)
