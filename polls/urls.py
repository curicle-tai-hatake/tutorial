from django.urls import path

from . import views

from rest_framework import routers

app_name = 'polls'
urlpatterns = [
    # ex: /polls/
    path('', views.IndexView.as_view(), name='index'),
    # ex: /polls/5/
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    # ex: /polls/5/results/
    path('<int:pk>/results/', views.ResultView.as_view(), name='results'),
    # ex: /polls/5/vote/
    path('<int:pk>/vote/', views.vote, name='vote'),
]

router = routers.DefaultRouter()
router.register(r'test', views.TestView)