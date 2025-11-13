from django.shortcuts import render

def home(request):
    return render(request, 'pages/home.html')

def themes(request):
    return render(request, 'pages/theme.html')

def business_themes(request):
    return render(request, 'pages/business_themes.html')

def portfolio_themes(request):
    return render(request, 'pages/portfolio_themes.html')

def blog_themes(request):
    return render(request, 'pages/blog_themes.html')

def ecommerce_themes(request):
    return render(request, 'pages/ecommerce_themes.html')

def templates_page(request):
    return render(request, 'pages/templates.html')

def about(request):
    return render(request, 'pages/about.html')

def contact(request):
    return render(request, 'pages/contact.html')

def login_page(request):
    return render(request, 'pages/login.html')

def cart(request):
    return render(request, 'pages/cart.html')

def checkout(request):
    return render(request, 'pages/checkout.html')

def payment_method(request):
    return render(request, 'pages/payment_method.html')

def payment(request):
    return render(request, 'pages/payment.html')

