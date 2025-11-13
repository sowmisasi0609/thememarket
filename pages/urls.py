from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('themes/', views.themes, name='themes'),
    path('templates/', views.templates_page, name='templates'),
    path('about/', views.about, name='about'),
     path('contact/', views.contact, name='contact'),
     path('login/', views.login_page, name='login'),
      path('cart/', views.cart, name='cart'),
      path('checkout/', views.checkout, name='checkout'),
       path('payment-method/', views.payment_method, name='payment_method'),
        path('payment/', views.payment, name='payment'),

    path('themes/business/', views.business_themes, name='business_themes'),
    path('themes/portfolio/', views.portfolio_themes, name='portfolio_themes'),
    path('themes/blog/', views.blog_themes, name='blog_themes'),
    path('themes/ecommerce/', views.ecommerce_themes, name='ecommerce_themes'),
]

