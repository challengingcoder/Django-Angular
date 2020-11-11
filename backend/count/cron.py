from .models import Count

def reset_count():
    count = Count.get_solo()
    count.value = 2