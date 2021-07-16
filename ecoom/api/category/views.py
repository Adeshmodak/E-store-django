from rest_framework import viewsets
from .serializer  import categorySerializer
from .models import category

class categoryviewsets(viewsets.ModelViewSet):
    queryset = category.objects.all().order_by('name')
    serializer_class = categorySerializer

# Create your views here.
