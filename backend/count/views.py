from django.shortcuts import render
from .models import Count;
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_protect
from django.http import JsonResponse

# Create your views here.
@csrf_protect
@require_http_methods(["GET", "POST"])
def count(request):
    count = Count.get_solo()
    if request.method == 'POST':
        count.update(value=count.value + 1)
    return JsonResponse({ "count": count.value })