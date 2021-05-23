from rest_framework.permissions import BasePermission, SAFE_METHODS


# Restriction for Manager
class IsManager(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.role == 1


# Restriction for Controler
class IsControler(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.sender == 2


# Restriction for Polyvalent
class IsPolyvalent(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.sender == 3
