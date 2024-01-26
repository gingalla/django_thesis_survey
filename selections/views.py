from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.template import loader
from .models import Image_pairing

'''
def selections(request):
  template = loader.get_template('selection_page.html')
  return HttpResponse(template.render())
'''

def selections(request):
   return render(request, 'selection_page.html')

def process_image_selection(request):
  if request.method == 'POST':
    image_dataset = request.POST.get('image_dataset')
    image1 = request.POST.get('image1')
    image2 = request.POST.get('image2')
    selection = request.POST.get('selection')

    # Create a new selection entry in the database using the Image_pairing model
    pairing = Image_pairing(image_dataset=image_dataset, image1=image1, image2=image2, selection=selection)
    pairing.save()
    
    return HttpResponseRedirect('/selections/')
  
  else:
      return HttpResponse("Invalid request method.")