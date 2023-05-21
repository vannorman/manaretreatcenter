from django.conf.urls import *
from . import views
"""mana_retreat_center URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
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
from django.contrib import admin
from django.urls import path

urlpatterns = [
	url(r'^party/?$', views.party), 
	url(r'^retreat/?$', views.simple_page('retreat.html')), 
	url(r'^apply/gatherer/?$', views.simple_page('apply_gatherer.html')), 
	url(r'^apply/residency/?$', views.simple_page('apply_residency.html')), 
	url(r'^apply/builder/?$', views.simple_page('apply_builder.html')), 
	url(r'^apply/naturalist/?$', views.simple_page('apply_naturalist.html')), 
	url(r'^apply/coliving/?$', views.simple_page('apply_coliving.html')), 
	url(r'^projects/?$', views.simple_page('projects.html')), 
    path('admin/', admin.site.urls),
    path('', views.main),
]
