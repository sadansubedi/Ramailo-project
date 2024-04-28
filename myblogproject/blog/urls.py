"""myblogproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from blog.views import CategoryAPIView, TagAPIView, BlogPostAPIView, CommentAPIView, UserRegistrationView,UserLoginView,UserProfileView,UserChangePasswordView,SendPasswordResetEmailView,UserPasswordResetView


urlpatterns = [
    path('categories/', CategoryAPIView.as_view(), name='category-list'),
    path('tags/', TagAPIView.as_view(), name='tag-list'),
    path('blogposts/', BlogPostAPIView.as_view(), name='blogpost-list'),
    path('comments/', CommentAPIView.as_view(), name='comment-list'),



    path('profile/',UserProfileView.as_view(),name='profile'),
    path ('getuser/<uid>',UserRegistrationView.as_view(),name='getuser'),
    path('register/',UserRegistrationView.as_view(),name='register'),
    path('login/',UserLoginView.as_view(),name='login'),
    path('changepassword/',UserChangePasswordView.as_view(),name='changepassword'),
    path('send-reset-password-email/',SendPasswordResetEmailView.as_view(),name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/',UserPasswordResetView.as_view(),name='reset-password'),
]
