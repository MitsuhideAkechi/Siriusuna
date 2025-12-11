# [Routes](RESTful_Resources_Routes_in_Rails.md)
# Redirection, the Flash and the Session

![](IMG-20251211101552849.png)

Code:  
![](IMG-20251211101552899.png)
> If we use `redirect_to new_movies_path` instead of `render :new` in `create` method, what user filled in formerly will fade away.

The `@movie = Movie.new` in `new` is used to render the view.
# Dealing with Forms
![](IMG-20251211101552945.png)

![](IMG-20251211101552988.png)

## Strong Parameters
The controller decides which form field parameters are allowed to be passed to the model for update/create...why?

![](IMG-20251211101553038.png) ^9gx3ke

_**[Old-school, check for new version](MVC.md)**_
# Summary
![](IMG-20251211101553093.png)
![](IMG-20251211101553175.png)
![](IMG-20251211101553225.png)
