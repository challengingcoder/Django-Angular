from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from count.models import Count
# Serializers define the API representation.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Count
        fields = ['count']